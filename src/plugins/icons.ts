import { type Plugin } from "vue";

interface GlobModule {
  default: {
    __file: string;
  };
}

const icons: Plugin = {
  install(app) {
    const icons = import.meta.glob<GlobModule>("@/assets/icons/*.vue", { eager: true });

    for (const icon of Object.values(icons)) {
      const fileName = icon.default.__file.split("/").pop();

      if (!fileName) continue;

      const name = fileName.split(".")[0];

      app.component(name, icon.default);
    }
  },
};

export { icons };
