import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://smiling.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://smiling.finance/farms'
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: 'https://smiling.finance/nests'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x576A96697843618D2274B1bba41F8007ba2a939e',
      }
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/SmilingFinance/",
      },
      {
        label: "Docs",
        href: "https://docs.smiling.finance/",
      },
      {
        label: "Blog",
        href: "https://smilingfinance.medium.com/",
      },
    ],
  }
]

export default config
