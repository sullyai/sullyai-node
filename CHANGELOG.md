# Changelog

## 0.1.0-alpha.3 (2025-04-15)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/sullyai/sullyai-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#23](https://github.com/sullyai/sullyai-node/issues/23)) ([fb3e765](https://github.com/sullyai/sullyai-node/commit/fb3e7659895dce2130be766b6ec65c1dea4553d1))
* **client:** send `X-Stainless-Timeout` in seconds ([#21](https://github.com/sullyai/sullyai-node/issues/21)) ([5bed310](https://github.com/sullyai/sullyai-node/commit/5bed310ba5498c3b67b9f0c9f84f4d8bfb79e892))
* **client:** send all configured auth headers ([#25](https://github.com/sullyai/sullyai-node/issues/25)) ([1ff6eab](https://github.com/sullyai/sullyai-node/commit/1ff6eab39d3c7eab6623276b7a82f2d206521f9b))
* **internal:** fix file uploads in node 18 jest ([27be156](https://github.com/sullyai/sullyai-node/commit/27be156d91d134f0ce3fe0ce6978855bb2e9ed20))
* **mcp:** remove unused tools.ts ([#24](https://github.com/sullyai/sullyai-node/issues/24)) ([07b80a4](https://github.com/sullyai/sullyai-node/commit/07b80a482f15c0f74926c0903d747f82a46dabf6))


### Chores

* **client:** minor internal fixes ([0d89afc](https://github.com/sullyai/sullyai-node/commit/0d89afc4b08e60d8a8f66a69d37b3de25ff0c6b8))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#20](https://github.com/sullyai/sullyai-node/issues/20)) ([3112337](https://github.com/sullyai/sullyai-node/commit/3112337f70c9472848584b110d0cbd8340a9cd0e))
* **exports:** cleaner resource index imports ([#18](https://github.com/sullyai/sullyai-node/issues/18)) ([17fd733](https://github.com/sullyai/sullyai-node/commit/17fd7333104b3d117e2fa17af55eb3486e69f0ad))
* **exports:** stop using path fallbacks ([#19](https://github.com/sullyai/sullyai-node/issues/19)) ([27419cb](https://github.com/sullyai/sullyai-node/commit/27419cb7d156126a1a8aa758d0f0209b4cfedc08))
* **internal:** add aliases for Record and Array ([#22](https://github.com/sullyai/sullyai-node/issues/22)) ([b192711](https://github.com/sullyai/sullyai-node/commit/b192711a172dd4a8b698a146597ab7bc6f78ed6a))
* **internal:** improve node 18 shims ([0a20072](https://github.com/sullyai/sullyai-node/commit/0a2007228301fd958f0cca7f6f68a6baa9d6e519))
* **internal:** minor client file refactoring ([#16](https://github.com/sullyai/sullyai-node/issues/16)) ([e31b6fe](https://github.com/sullyai/sullyai-node/commit/e31b6fe498a7cb69d7a0f6b72227d160ebc7a4de))
* **internal:** reduce CI branch coverage ([1522d97](https://github.com/sullyai/sullyai-node/commit/1522d97896af770bcab88ed87785f0a162afbc94))
* **internal:** upload builds and expand CI branch coverage ([24ee15e](https://github.com/sullyai/sullyai-node/commit/24ee15e34103fca95eac5bc9e809a539bf63efa3))
* **tests:** improve enum examples ([#26](https://github.com/sullyai/sullyai-node/issues/26)) ([d58cb28](https://github.com/sullyai/sullyai-node/commit/d58cb286e34100e81ecc71b7a7cee833a71141d2))

## 0.1.0-alpha.2 (2025-03-15)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/sullyai/sullyai-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** manual updates ([#10](https://github.com/sullyai/sullyai-node/issues/10)) ([2cf8084](https://github.com/sullyai/sullyai-node/commit/2cf80844ed5d64784cc50b984995b7b3c91b81bf))


### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#13](https://github.com/sullyai/sullyai-node/issues/13)) ([1e54705](https://github.com/sullyai/sullyai-node/commit/1e54705e2a4bb903f08edac79c10cf74a77e5df6))
* **internal:** add mts file + crypto shim types ([#14](https://github.com/sullyai/sullyai-node/issues/14)) ([4dbcbd8](https://github.com/sullyai/sullyai-node/commit/4dbcbd80d57776fc984b0b122a234af6ee690de5))


### Chores

* **internal:** remove extra empty newlines ([#12](https://github.com/sullyai/sullyai-node/issues/12)) ([00b2cde](https://github.com/sullyai/sullyai-node/commit/00b2cdeb90aef1b3de08dab3881c23227bfa33f5))

## 0.1.0-alpha.1 (2025-03-11)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/sullyai/sullyai-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api update ([#6](https://github.com/sullyai/sullyai-node/issues/6)) ([029fd0f](https://github.com/sullyai/sullyai-node/commit/029fd0f385c83375b9d661f0409ff2f642b9c9ce))
* **api:** api update ([#8](https://github.com/sullyai/sullyai-node/issues/8)) ([4ee9dae](https://github.com/sullyai/sullyai-node/commit/4ee9dae44c0e52a5d79c5d072d0a8347619e75d3))
* **api:** manual updates ([#7](https://github.com/sullyai/sullyai-node/issues/7)) ([fd5f8bb](https://github.com/sullyai/sullyai-node/commit/fd5f8bbe01b2eee85f846b41795b3f6d9c0c977c))
* **client:** accept RFC6838 JSON content types ([ac89ee0](https://github.com/sullyai/sullyai-node/commit/ac89ee0599c8282c6225675b51d92ab57d965627))


### Chores

* go live ([#1](https://github.com/sullyai/sullyai-node/issues/1)) ([33bc806](https://github.com/sullyai/sullyai-node/commit/33bc8061ceb06a11ced1564c3728da104922f015))
* update SDK settings ([#3](https://github.com/sullyai/sullyai-node/issues/3)) ([29d6eef](https://github.com/sullyai/sullyai-node/commit/29d6eefa25c72472e99f6deab4f01474e163828e))
* update SDK settings ([#5](https://github.com/sullyai/sullyai-node/issues/5)) ([3860fe2](https://github.com/sullyai/sullyai-node/commit/3860fe2b3fd46457452119b87b74d93e474eb1e3))
