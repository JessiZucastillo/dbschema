const ENV = process.env.NODE_ENV || 'DEV';

console.log(`ENV ========== ${ENV}`);

if (ENV === 'DEV' || ENV === 'TEST') {
  const config = require('./config.json'),
        configEnv = config[ENV];

  Object.keys(configEnv).forEach((key) => {
    process.env[key] = configEnv[key]
  });
}
