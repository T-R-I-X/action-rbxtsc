"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const exec_1 = require("@actions/exec");
const path_1 = require("path");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const executable = (0, core_1.getInput)('executable');
        console.log(`##[add-matcher]${(0, path_1.join)(__dirname, '..', '.github', 'tsc.json')}`);
        const args = [`${(0, path_1.join)(process.cwd(), 'node_modules/.bin', executable)}`];
        try {
            yield (0, exec_1.exec)('node', args);
        }
        catch (error) {
            (0, core_1.setFailed)('');
        }
    });
}
void run();
