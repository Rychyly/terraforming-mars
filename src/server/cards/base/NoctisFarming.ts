import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {Player} from '../../Player';
import {CardName} from '../../../common/cards/CardName';
import {CardRequirements} from '../CardRequirements';
import {CardRenderer} from '../render/CardRenderer';

export class NoctisFarming extends Card implements IProjectCard {
  public migrated = true;
  constructor() {
    super({
      cardType: CardType.AUTOMATED,
      name: CardName.NOCTIS_FARMING,
      tags: [Tag.PLANT, Tag.BUILDING],
      cost: 10,
      productionBox: {megacredits: 1},
      requirements: CardRequirements.builder((b) => b.temperature(-20)),
      victoryPoints: 1,

      metadata: {
        cardNumber: '176',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1);
          }).nbsp.plants(2);
        }),
        description: 'Requires -20 C or warmer. Increase your M€ production 1 step and gain 2 Plants.',
      },
    });
  }

  public play(player: Player) {
    player.plants += 2;
    return undefined;
  }
}
