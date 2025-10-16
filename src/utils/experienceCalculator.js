// Utility function to calculate years of experience
export function calculateYearsOfExperience() {
  // First development job start date (IONIC Health - Global/Brazil)
  const firstDevJobDate = new Date('2019-02-01');
  const currentDate = new Date();
  
  // Calculate the difference in years
  const diffInMs = currentDate - firstDevJobDate;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
  
  // Round to 1 decimal place and add '+' to indicate ongoing experience
  const years = Math.round(diffInYears * 10) / 10;
  
  // Debug: Log the calculation (remove in production)
  console.log(`Experience calculation: ${firstDevJobDate.toDateString()} to ${currentDate.toDateString()} = ${years} years`);
  
  return `${years}+`;
}

// Function to get the first development job date
export function getFirstDevJobDate() {
  return '2019-02-01';
}

// Function to format the experience summary
export function getExperienceSummary() {
  const years = calculateYearsOfExperience();
  return `Software Engineer with ${years} years of experience leading robotic teams and building distributed systems. Founder of Inova Labs, specializing in innovative technology solutions. Passionate about cloud-native applications, IoT platforms, and cutting-edge software development.`;
}
