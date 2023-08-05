'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TreeNode } from './TreeNode';
import { C4DisplayIcon } from '../../control4'

export class DisplayIconNode extends TreeNode<C4DisplayIcon> {
    constructor(name: string, displayicons: C4DisplayIcon) {
        super(name, displayicons, "device-camera", displayicons.sizes && displayicons.sizes.length == 0);

        this.description = displayicons.type;
        this.tooltip = displayicons.type;
    }


    getNameOfType() {
        return "C4DisplayIcon"
    }

    contextValue = "displayicons";
}