import Speak from './speak';
import Jump from './jump';
import Sing from './sing';
declare class PandaWarrior {
    constructor();
    armour(): boolean;
    speak: typeof Speak;
    jump: typeof Jump;
    sing: typeof Sing;
    weapon(): string;
    furColor(): string;
    shout(type: string): "hi would like an banoo" | "get out of here";
}
export default PandaWarrior;
