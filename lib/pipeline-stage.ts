import { CfnOutput, Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { FeedMohamedAppStack } from "./feed-mohamed-app-stack";


export class PipelineStage extends Stage {
    public readonly hcEndpoint: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new FeedMohamedAppStack(this, 'WebService');

        this.hcEndpoint = service.hcEndpoint;
    }
}