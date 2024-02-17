# NxTsPackagesRelease

Example nx workspace containing multiple typescript packages to be published using `nx release`.

## Generate workspace

```sh
npx create-nx-workspace@latest --preset ts --ci skip nx-ts-packages-release
```

## Add a ts lib

```sh
npx nx g @nx/js:lib my-lib \
 --unitTestRunner none \
 --bundler tsc \
 --publishable \
 --importPath @my-org/my-lib \
 --directory packages/my-lib \
 --projectNameAndRootFormat as-provided

```

## Add another ts lib

```sh
npx nx g @nx/js:lib my-lib-2 \
 --unitTestRunner none \
 --bundler tsc \
 --publishable \
 --importPath @my-org/my-lib-2 \
 --directory packages/my-lib-2 \
 --projectNameAndRootFormat as-provided

```

## Release

```sh
npx nx release --skip-publish
```

Note that this repo is using conventional-commits and `nx release version` currently only bumps versions for `feat:` and `fix:` commits.
