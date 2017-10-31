class Column {
  constructor(column?) {
    if(column) {
      this.type = column.type || ''
      this.imageUrl = column.imageUrl || '',
      this.imageCaption = column.imageCaption || '',
      this.text = column.text || ''
    }
  }

  type = 'text';
  imageUrl = null;
  imageCaption = null;
  text = null;

  toggleType() {
    this.type = this.type === 'text' ? 'image' : 'text';
  }
}

export class WorkExampleContentEditor {
  constructor (
    private workExample?,
  ) {
    this.workExample = workExample || {}
  }

  sectionTypes = [
    {
      option: 'One Column',
      slug: 'oneColumn',
      columns: [new Column()]
    },
    {
      option: 'Two Column',
      slug: 'twoColumn',
      columns: [new Column(), new Column()]
    },
    {
      option: 'Three Column',
      slug: 'threeColumn',
      columns: [new Column(), new Column(), new Column()]
    }
  ]

  initialise() {
    if (this.workExample.content.length > 0) {
      this.instanciateColumns()
    }
  }

  instanciateColumns() {
    for(let i = 0; i < this.workExample.content.length; i+= 1) {
      for(let j = 0; j < this.workExample.content[i].columns.length; j += 1) {
        this.workExample.content[i].columns[j] = new Column(this.workExample.content[i].columns[j]);
      }
    }
  }

  addSection() {
    if(!this.workExample.content) {
      this.workExample.content = []
    };
    this.workExample.content.push(this.clone(this.sectionTypes[0]));
  }

  updateSection(newSectionType, sectionIndex) {
    for (const sectionType of this.sectionTypes) {
      if (sectionType.option === newSectionType) {
        this.workExample.content[sectionIndex].columns = this.clone(sectionType.columns);
      }
    }
  }

  generateSectionIndex() {
    if (this.workExample.content.length === 0) {
      return 1;
    }

    if (this.workExample.content.length === 1) {
      return 2;
    }

    const largestIndex = this.workExample.content.reduce(function (a, b) {
      return a.id > b.id ? a.id : b.id;
    });

    return largestIndex + 1;
  }

  clone(item) {
    return JSON.parse(JSON.stringify(item));
  }
}
