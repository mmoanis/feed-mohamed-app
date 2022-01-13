#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FeedMohamedAppStack } from '../lib/feed-mohamed-app-stack';

const app = new cdk.App();
new FeedMohamedAppStack(app, 'FeedMohamedAppStack');
