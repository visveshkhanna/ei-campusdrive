export class Module {
  public title: string;
  public description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
export class Quiz {
  public title: string;
  public description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
export class Assignment {
  public title: string;
  public description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
export class Resource {
  public name: string;
  public url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}
