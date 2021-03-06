import { HtmlSiteDef } from '../framework/html-site.def';
import { SiteConfig } from '../framework/site-config';
import { ORDERED_NODE_SNAPSHOT_TYPE } from '../framework/constants';

export class MoreleNetDef extends HtmlSiteDef{
  protected getConfig(): SiteConfig {
    return {
      name: 'Morele.net',
      url: 'https://www.morele.net/sony-playstation-5-5943281/',
    };
  }

  protected hasUnexpectedChanges(document: Document): boolean {
    const phrase = 'PRODUKT NIEDOSTĘPNY';

    // @ts-ignore
    const xPathResult = document.evaluate(
      `//*[normalize-space() = '${phrase}']`,
      document,
      null,
      ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );

    return xPathResult.snapshotLength === 0;
  }
}
