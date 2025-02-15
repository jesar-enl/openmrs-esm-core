import { getAsyncLifecycle } from "@openmrs/esm-framework";

const frontendDependencies = {
  "@openmrs/esm-framework": process.env.FRAMEWORK_VERSION,
};

function setupOpenMRS() {
  const moduleName = "@openmrs/esm-implementer-tools-app";
  const options = {
    featureName: "Implementer Tools",
    moduleName,
  };

  return {
    pages: [
      {
        route: () => true,
        load: getAsyncLifecycle(
          () => import("./implementer-tools.component"),
          options
        ),
      },
    ],
    extensions: [
      {
        name: "implementer-tools-button",
        slot: "top-nav-actions-slot",
        load: getAsyncLifecycle(
          () => import("./implementer-tools.button"),
          options
        ),
      },
    ],
  };
}

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

export { setupOpenMRS, importTranslation, frontendDependencies };

export { default as ConfigEditButton } from "./config-edit-button/config-edit-button.component";
