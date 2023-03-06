export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [123, 'Неверный формат имени'],
      [124, 'Возраст должен быть больше 18'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
