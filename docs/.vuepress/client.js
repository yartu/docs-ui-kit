import { defineClientConfig } from '@vuepress/client'
import YartuUiKit from '@yartu/ui-kit';

export default defineClientConfig({
  enhance({ app }) {
    app.use(YartuUiKit)
  },
})