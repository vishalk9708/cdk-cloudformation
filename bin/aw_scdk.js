#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import AwScdkStack from '../lib/aw_scdk-stack.js';

const app = new cdk.App();
new AwScdkStack(app, 'AwScdkStack', {
  stackName: 'Parag-stack',
  env: {
    region:'ap-south-1',
    account:'796564387785',
  }
});