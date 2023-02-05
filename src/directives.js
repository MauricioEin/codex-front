import { svgService } from './services/svg.service'

const icon = {
  mounted: (el, binding) => {
    const icon = svgService.getSvg(binding.value)
    el.innerHTML = icon
  },
}

export { icon }
