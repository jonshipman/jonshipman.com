import { renameSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// Configuration
const sveltePath = 'C:\\Projects\\jonshipman.com';
const buildPath = join(sveltePath, 'build');
const gitOrigin = 'C:\\Projects\\jonshipman.github.io\\.git';
const gitDest = join(buildPath, '.git');

async function run() {
	try {
		console.log('🚀 Starting build...');

		// 1. Build the Svelte project
		const build = Bun.spawnSync(['bun', 'run', 'build'], {
			cwd: sveltePath,
			stdout: 'inherit'
		});

		if (!build.success) throw new Error('Build failed');

		// 2. Move .git folder to build directory
		if (!existsSync(gitOrigin)) {
			throw new Error(`Could not find .git folder at ${gitOrigin}`);
		}

		console.log('📦 Moving .git to build folder...');
		renameSync(gitOrigin, gitDest);

		// 3. Git Operations
		console.log('💾 Committing and pushing...');
		const gitOps = [
			['git', 'add', '.'],
			['git', 'commit', '-m', `Deploy update: ${new Date().toLocaleString()}`],
			['git', 'push', 'origin', 'master']
		];

		for (const cmd of gitOps) {
			const proc = Bun.spawnSync(cmd, {
				cwd: buildPath,
				stdout: 'inherit'
			});
			if (!proc.success) console.error(`Warning: Command "${cmd.join(' ')}" failed.`);
		}
	} catch (error) {
		if (error && typeof error === 'object' && 'message' in error) {
			console.error('❌ Error:', error.message);
		}
	} finally {
		// 4. Always move the .git folder back, even if Git commands fail
		if (existsSync(gitDest)) {
			console.log('🔄 Moving .git back to origin...');
			renameSync(gitDest, gitOrigin);
			console.log('✅ Done.');
		}
	}
}

run();
