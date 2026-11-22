import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PromptIcon = defineComponent({
  name: 'PromptIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '11', width: '36', height: '26', rx: '5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M12 20 H31', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('path', { d: 'M12 28 H22', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '25', y: '24.5', width: '3.5', height: '7', rx: '1', fill: '#E76F51', stroke: 'none' }));
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

export default PromptIcon;
