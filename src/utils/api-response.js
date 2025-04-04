class ApiResponse {
  constructor(statusCode, data, message = "success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = this.statusCode < 400; //success true
  }
}

export { ApiResponse };
