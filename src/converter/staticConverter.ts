import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

export class StaticConverter {
  public getName() {
    return 'static';
  }

  public async run(files: string[], sourceFolder: string, outFolder: string, options: { context: vscode.ExtensionContext }) {
    for (const file of files) {
      const targetFile = path.join(outFolder, file);
      const sourceFile = path.join(sourceFolder, file);
      
      try {
        if (!fs.existsSync(path.dirname(targetFile))) {
          fs.mkdirSync(path.dirname(targetFile), { recursive: true });
        }
        fs.copyFileSync(sourceFile, targetFile);
        console.info(sourceFile);
      }
      catch (exception)
      {
        console.warn('error while copying: ' + sourceFile);
      }
    }
  }
}