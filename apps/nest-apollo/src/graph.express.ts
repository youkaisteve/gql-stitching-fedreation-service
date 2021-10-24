import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import makeRemoteExecutor from './lib/make_remote_executor'
import { stitchSchemas } from '@graphql-tools/stitch'
import { federationToStitchingSDL, stitchingDirectives } from '@graphql-tools/stitching-directives'

const stitchingConfig = stitchingDirectives();
console.log(stitchingConfig)

async function makeGatewaySchema() {
    return stitchSchemas({
        subschemaConfigTransforms: [stitchingConfig.stitchingDirectivesTransformer],
        subschemas: await Promise.all([
            fetchFederationSubchema(makeRemoteExecutor('http://localhost:3001/graphql')),
            fetchFederationSubchema(makeRemoteExecutor('http://localhost:3002/graphql')),
        ])
    });
}

async function fetchFederationSubchema(executor) {
    const federationSDL = await executor({ document: '{ _service { sdl } }' });
    const stitchingSDL = federationToStitchingSDL(federationSDL.data._service.sdl, stitchingConfig);
    console.log(stitchingSDL)
    return {
        schema: buildSchema(stitchingSDL),
        executor,
    };
}

export async function getApp() {
    const app = express();
    const schema = await makeGatewaySchema();
    app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
    app.listen(3000)
    return app;
}