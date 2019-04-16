# What is this?
A schematic is a way for us to specify a file or folder structure that we want to be able to scaffold. See that we are
going to be generating a lot of features, I felt like this might be a use case to automate that creation.

# How do I use it?
Well... in order for us to use this thing without publishing a node package (which maybe we should in the future), we
have to install it locally and "link" the package.

# Installation
1. Clone the repository to your local machine.
```
git clone https://github.com/mwagz/feature-schematic
```

2. Install package dependencies
```
npm install
```

3. Install TypeScript Globally
```
npm install -g typescript
```

4. Build the project
```
tsc -p tsconfig.json
```

5. Link the package
```
npm link
```

6. Navigate to your project directory
```
cd path/to/your/project
```

7. Link the schematic to your project
```
npm link feature
```

# Usage
```
ng generate feature:feature --name="feature name"
```
