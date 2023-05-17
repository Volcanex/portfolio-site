import styles from './svg-pan-zoom.module.scss';
import classNames from 'classnames';

export interface SvgPanZoomProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-svg-pan-zooms-and-templates
 */
export const SvgPanZoom = ({ className }: SvgPanZoomProps) => {
    return <div className={classNames(styles.root, className)}>SvgPanZoom</div>;
};
