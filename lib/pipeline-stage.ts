import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { FeedMohamedAppStack } from "./feed-mohamed-app-stack";


export class PipelineStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        new FeedMohamedAppStack(this, 'WebService');
    }
}