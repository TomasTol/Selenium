import { Builder, Capabilities, By, until } from 'selenium-webdriver';

async function runTest() {
  const capabilities = Capabilities.chrome();
  capabilities.set('browserstack.user', 'tomas_L2Fcu1');
  capabilities.set('browserstack.key', 'ncPa65WwUvNwQRWPbMBz');

  const driver = await new Builder()
    .usingServer('https://hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

  try {
    await driver.get('https://www.tu-sitio.com');
    await driver.findElement(By.name('q')).sendKeys('BrowserStack');
    await driver.findElement(By.name('btnK')).click();
    await driver.wait(until.titleIs('BrowserStack - Google Search'), 5000);
  } finally {
    await driver.quit();
  }
}

runTest();
