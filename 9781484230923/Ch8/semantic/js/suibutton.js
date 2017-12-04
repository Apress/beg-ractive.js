const SUIButton = Ractive.extend({
  template: `
    <button class="ui button">{{ message }}</button>
  `,
  data: { message: 'Hello World' }
});

const ractive = Ractive({
  target: "#container",
  template: `
    <SUIButton />
  `,
  components: { SUIButton }
});