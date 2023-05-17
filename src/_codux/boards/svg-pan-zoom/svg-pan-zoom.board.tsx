import { createBoard } from '@wixc3/react-board';
import { SvgPanZoom } from '../../../components/svg-pan-zoom/svg-pan-zoom';

export default createBoard({
    name: 'SvgPanZoom',
    Board: () => <SvgPanZoom />
});
