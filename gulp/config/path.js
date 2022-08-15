import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif}`,
    svg: `${srcFolder}/img/**/*.svg`,
    css: `${srcFolder}/css/style.css`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    css: `${srcFolder}/css/**/*.css`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,ico,png,gif}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`,
};
