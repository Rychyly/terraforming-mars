import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { CardName } from "../CardName";
import { CardMetadata } from "../cards/CardMetadata";
import { CardRequirements } from "../cards/CardRequirements";
import { CardRequirement } from "../cards/CardRequirement";

export class BreathingFilters implements IProjectCard {
    public cost: number = 11;
    public tags: Array<Tags> = [Tags.SCIENCE];
    public name: CardName = CardName.BREATHING_FILTERS;
    public cardType: CardType = CardType.AUTOMATED;
    public canPlay(player: Player, game: Game): boolean {
        return game.getOxygenLevel() >= 7 - player.getRequirementsBonus(game);
    }
    public play() {
        return undefined;
    }
    public getVictoryPoints() {
        return 2;
    }
    public metadata: CardMetadata = {
        description: "Requires 7% oxygen.",
        cardNumber: "114",
        requirements: new CardRequirements([CardRequirement.oxygen(7)]),
        victoryPoints: 2,
    };
}
