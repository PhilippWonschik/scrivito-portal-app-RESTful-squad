import { provideEditingConfig } from 'scrivito'
import { DownloadCardWidget } from './DownloadCardWidgetClass'
import { classNameToThumbnail } from '../../utils/classNameToThumbnail'

provideEditingConfig(DownloadCardWidget, {
  title: 'Download Card',
  thumbnail: classNameToThumbnail('DownloadCardWidget'),
  attributes: {
    icon: {
      title: 'Icon',
      description:
        'Default: "bi-filetype-pdf". The full list of names can be found at https://icons.getbootstrap.com/',
    },
  },
  properties: ['link', 'icon'],
  initialContent: {
    icon: 'bi-filetype-pdf',
  },
})
