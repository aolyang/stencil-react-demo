import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'stencil',
      proxiesFile: '../stencil-react/lib/components/stencil-generated/index.ts',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
