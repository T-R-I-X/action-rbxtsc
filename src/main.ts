import { getInput, setFailed } from '@actions/core';
import { exec } from '@actions/exec';
import { join } from 'path';

async function run() {
	const project = getInput('project');
	const build = getInput('build');
	const executable = getInput('executable');
	console.log(`##[add-matcher]${join(__dirname, '..', '.github', 'tsc.json')}`);
	const args = [
		`${join(process.cwd(), 'node_modules/.bin', executable)}`,
	try {
		await exec('node', args);
	} catch (error) {
		setFailed('');
	}
}

void run();
