import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const CuttingBoardIcon = defineComponent({
  name: 'CuttingBoardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '10', width: '32', height: '30', rx: '5', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '13', cy: '16', r: '2.2', fill: '#FFFFFF', 'stroke-width': sw(2) }));
      children.push(
        h('g', { transform: 'rotate(-22 24 25)' }, [
          h('rect', { x: '12', y: '22', width: '10', height: '6', rx: '3', fill: '#264653' }),
          h('path', { d: 'M21 20 L33 20 C 35.5 20 37 22 36.5 24.5 C 34.5 26 31 26 27 26 L21 26 Z', fill: '#FFFFFF', 'stroke-width': sw(2.4) }),
          h('path', { d: 'M21 20 L21 26', stroke: '#2A2A2A', 'stroke-width': sw(1.8) }),
        ]),
      );
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default CuttingBoardIcon;
