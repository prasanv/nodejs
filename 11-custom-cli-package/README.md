# NODE CLI

- From the package folder "/nodejs-indepth/custom-cli-package" run `sudo npm install -g` to install the package to the global npm
- Verify if package is installed `npm list -g`
- Add file path (i.e. `../../../../pbalasubramaniam/.nvm/versions/node/v18.17.1/bin`), CLI commands, file names to the package.json to execute them from the CLI
- Note: Here are some Pokeman character names "charmander", "dragonite"
- Pass options to CLI example
  - type `custom-cli-package-options --pokemon=charmander` in CLI
- Add interactivity to CLI example
  - type `custom-cli-package-interact` in CLI, then for the prompt type a character name
