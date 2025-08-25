export function showLoadingSpinner() {
  console.log('Loading...');
}

export function hideLoadingSpinner() {
  console.log('Loading complete.');
}

export function showErrorMessage(message: string) {
  console.error(`Error: ${message}`);
}

export function showSuccessMessage(message: string) {
  console.log(`Success: ${message}`);
}