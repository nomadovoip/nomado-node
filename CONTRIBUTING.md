# Contribution Guidelines

First of all, thank you for thinking of contributing to this project! 

## Ways to Contribute

* Improving documentation
* Fixing a bug
* Implementing a new feature
* Improving existing implementation, performance, etc.
* Blog, tweet or talk about the project

## Questions

Feel free to open an [issue](https://github.com/nomadovoip/nomado-node/issues) with your question.

If you want to discuss about ways to improve the project or request a feature, please describe the feature in detail, and why it would be useful to others as well.

## Reporting a Bug

Use the [GitHub issue tracker](https://github.com/nomadovoip/nomado-node/issues) to report any bug you find.

Before reporting, please make sure:

* You are using the [latest version](https://github.com/nomadovoip/nomado-node/releases).
* You have read the [documentation](https://github.com/nomadovoip/nomado-node/blob/master/README.md) first, and double-checked your configuration.
* The same bug has not been reported yet
	
Use a clear and descriptive title for the issue to identify the problem.  
In your issue description, please include as much information as possible:
* What was expected, and what happened instead.
* Your operating system, node version.
* The exact steps to reproduce the problem in as many details as possible.
	

## Pull Requests

Pull requests are welcome! Please keep the following in mind:

* Try to maintain the existing coding style.
* Make sure the tests pass (run `npm test`). 
* Write new unit tests for your code.

Please submit yout Pull Requests to the ``develop`` branch.  
All new features and bug fixes will be added to ``develop``, until a stable release is ready. ``develop`` will then be
merged to master with a new release tag.

**Set up the project on your machine:**

```bash
git clone https://github.com/nomadovoip/nomado-node/
cd nomado-node
npm install
```

**Verify the tests are passing:**

```
npm test
```

**Make it globally available so you can run it on your test project:**

```
npm link
```