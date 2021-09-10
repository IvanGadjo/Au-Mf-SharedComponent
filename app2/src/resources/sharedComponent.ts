import { bindable, inlineView } from 'aurelia-framework';

@inlineView(`<template>
  <h2>\${message}</h2>
</template>`)
export class SharedComponent {
    @bindable message = '== I am a shared component ==';
}