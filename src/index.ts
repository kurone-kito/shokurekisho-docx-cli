import commander from 'commander';
import { version } from '../package.json';
import build from './build';

commander
  .command('build <source> [destination]')
  .alias('b')
  .description('Generate docx of resume from JSON.')
  .action(build);
commander.version(version);
commander.parse(process.argv);
if (process.argv.length < 1) {
  commander.help();
}
