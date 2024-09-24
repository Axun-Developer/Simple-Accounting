import './bootstrap';
import { createApp, defineAsyncComponent } from 'vue';
import { Ziggy } from './ziggy';

const app = createApp({});

const componentFiles = import.meta.glob('./components/*.vue');
// const utilsFiles = import.meta.glob('./utils/*.vue');
const basesFiles = import.meta.glob('./bases/*.vue');
const allComponents = {
    ...componentFiles,
    // ...utilsFiles,
    ...basesFiles,
};
function pascalToKebab(name) {
    return name
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();
}
Object.entries(allComponents).forEach(([path, resolver]) => {
    const componentName = path.split('/').pop().replace('.vue', '');
    const kebabName = pascalToKebab(componentName);
    app.component(kebabName, defineAsyncComponent(resolver));
    console.log(`Registered component: ${kebabName}`);
});
app.use(Ziggy);
app.mount('#app');
