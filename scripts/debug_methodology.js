const fs = require('fs');
const path = require('path');

// Test the methodology parsing on UK file
function debugMethodologyParsing() {
  const ukPath = path.join(__dirname, 'reports/market_overviews/uk.md');
  const content = fs.readFileSync(ukPath, 'utf8');
  
  console.log('=== Testing Methodology Parsing ===');
  
  // Find the methodology section
  const methodologyMatch = content.match(/## Methodology\n([\s\S]*?)(?=##|$)/);
  
  if (methodologyMatch) {
    console.log('Found methodology section');
    const methodologyContent = methodologyMatch[1].trim();
    console.log('Methodology content length:', methodologyContent.length);
    console.log('First 200 chars:', methodologyContent.substring(0, 200));
    
    // Test the regex patterns
    const caMatch = methodologyContent.match(/### Conversation Analysis\n([\s\S]*?)(?=###|$)/);
    const wriMatch = methodologyContent.match(/### Weighted Resonance Index\n([\s\S]*?)(?=###|$)/);
    
    console.log('Conversation Analysis match:', caMatch ? 'FOUND' : 'NOT FOUND');
    console.log('Weighted Resonance Index match:', wriMatch ? 'FOUND' : 'NOT FOUND');
    
    if (caMatch) {
      console.log('CA content length:', caMatch[1].trim().length);
      console.log('CA first 100 chars:', caMatch[1].trim().substring(0, 100));
    }
    
    if (wriMatch) {
      console.log('WRI content length:', wriMatch[1].trim().length);
      console.log('WRI first 100 chars:', wriMatch[1].trim().substring(0, 100));
    }
  } else {
    console.log('No methodology section found');
  }
}

debugMethodologyParsing(); 