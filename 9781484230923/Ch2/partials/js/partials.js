var thumbs = "<figure class='thumbnail'><img src='img/{{id}}.png'><figcaption>{{description}}</figcaption></figure>";

var ractive = new Ractive({
  el: '#container',
  template: '#template',
  partials: { thumbnail: thumbs },
  data: { 
    items: [
      { id: 'africanviolet', description: 'African Violet' },
      { id: 'cactusflower', description: 'Cactus Flower' },
      { id: 'forestorchid', description: 'Forest Orchid' },
      { id: 'odontoglossum', description: 'Odontoglossum' },
      { id: 'paphiopedilum', description: 'Paphiopedilum' },
      { id: 'pinkcamelia', description: 'Pink Camelia' },
      { id: 'redcamelia', description: 'Red Camelia' },
      { id: 'whitecamelia', description: 'White Camelia' },
      { id: 'zygopetalum', description: 'Zygopetalum' }
    ]
  }
});