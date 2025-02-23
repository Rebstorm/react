import React from 'react'
import {Button, IconButton, Breadcrumbs, ActionMenu, ActionList, NavList} from '../..'
import {PageHeader} from '../../PageHeader'
import {Tooltip} from './Tooltip'
import {
  GitBranchIcon,
  KebabHorizontalIcon,
  TriangleDownIcon,
  CheckIcon,
  PeopleIcon,
  SmileyIcon,
  EyeIcon,
  CommentIcon,
  XIcon,
} from '@primer/octicons-react'
import {default as VisuallyHidden} from '../../_VisuallyHidden'

export default {
  title: 'Drafts/Components/Tooltip/Examples',
  component: Tooltip,
}

export const CustomId = () => (
  <Tooltip id="tooltip-custom-id" text="Close feedback form" direction="nw" type="label">
    <IconButton aria-labelledby="tooltip-custom-id" icon={XIcon} variant="invisible" onClick={() => {}} />
  </Tooltip>
)

export const FilesPage = () => (
  <PageHeader>
    <PageHeader.ContextArea>
      <PageHeader.ParentLink>Files</PageHeader.ParentLink>
      <PageHeader.ContextAreaActions>
        <ActionMenu>
          <ActionMenu.Anchor>
            <Tooltip text="Supplementary text to add here">
              <Button size="small" leadingVisual={GitBranchIcon} trailingAction={TriangleDownIcon}>
                main
              </Button>
            </Tooltip>
          </ActionMenu.Anchor>
          <ActionMenu.Overlay width="medium">
            <ActionList>
              <ActionList.Item onSelect={() => alert('Main')}>
                <ActionList.LeadingVisual>
                  <CheckIcon />
                </ActionList.LeadingVisual>
                main <ActionList.TrailingVisual>default</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Item onSelect={() => alert('Branch 1')}>branch-1</ActionList.Item>
              <ActionList.Item onSelect={() => alert('Branch 2')}>branch-2</ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
        <ActionMenu>
          <ActionMenu.Anchor>
            <IconButton size="small" aria-label="More file actions" icon={KebabHorizontalIcon} />
          </ActionMenu.Anchor>
          <ActionMenu.Overlay width="medium">
            <ActionList>
              <ActionList.Group title="Raw file content">
                <ActionList.Item onSelect={() => alert('Download')}>Download</ActionList.Item>
              </ActionList.Group>
              <ActionList.Divider />
              <ActionList.Item onSelect={() => alert('Jump to line')}>
                Jump to line
                <ActionList.TrailingVisual>L</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Divider />
              <ActionList.Item onSelect={() => alert('Copy path')}>
                Copy path
                <ActionList.TrailingVisual>⌘⇧.</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Item onSelect={() => alert('Copy permalink')}>
                Copy permalink
                <ActionList.TrailingVisual>⌘⇧,</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Divider />
              <ActionList.Group title="View Options">
                <ActionList.Item onSelect={() => alert('Show code folding buttons')}>
                  Show code folding buttons
                </ActionList.Item>
                <ActionList.Item onSelect={() => alert('Wrap lines')}>Wrap lines</ActionList.Item>
                <ActionList.Item onSelect={() => alert('Center content')}>Center content</ActionList.Item>
              </ActionList.Group>
              <ActionList.Divider />
              <ActionList.Item variant="danger" onSelect={() => alert('Delete file clicked')}>
                Delete file
                <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
              </ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </PageHeader.ContextAreaActions>
    </PageHeader.ContextArea>
    <PageHeader.TitleArea>
      <Breadcrumbs>
        <Breadcrumbs.Item href="https://github.com/primer/react/tree/main">react</Breadcrumbs.Item>
        <Breadcrumbs.Item href="https://github.com/primer/react/tree/main/packages/react/src">src</Breadcrumbs.Item>
        <Breadcrumbs.Item href="https://github.com/primer/react/tree/main/packages/react/src/PageHeader">
          PageHeader
        </Breadcrumbs.Item>
        <Breadcrumbs.Item href="https://github.com/primer/react/tree/main/packages/react/src/PageHeader/PageHeader.tsx">
          PageHeader.tsx
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <VisuallyHidden as="h2">PageHeader.tsx</VisuallyHidden>
      <PageHeader.Actions hidden={{narrow: true}}>
        <ActionMenu>
          <ActionMenu.Anchor>
            <IconButton size="small" aria-label="More file actions" icon={KebabHorizontalIcon} />
          </ActionMenu.Anchor>
          <ActionMenu.Overlay width="medium">
            <ActionList>
              <ActionList.Group title="Raw file content">
                <ActionList.Item onSelect={() => alert('Download')}>Download</ActionList.Item>
              </ActionList.Group>
              <ActionList.Divider />
              <ActionList.Item onSelect={() => alert('Jump to line')}>
                Jump to line
                <ActionList.TrailingVisual>L</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Divider />
              <ActionList.Item onSelect={() => alert('Copy path')}>
                Copy path
                <ActionList.TrailingVisual>⌘⇧.</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Item onSelect={() => alert('Copy permalink')}>
                Copy permalink
                <ActionList.TrailingVisual>⌘⇧,</ActionList.TrailingVisual>
              </ActionList.Item>
              <ActionList.Divider />
              <ActionList.Group title="View Options">
                <ActionList.Item onSelect={() => alert('Show code folding buttons')}>
                  Show code folding buttons
                </ActionList.Item>
                <ActionList.Item onSelect={() => alert('Wrap lines')}>Wrap lines</ActionList.Item>
                <ActionList.Item onSelect={() => alert('Center content')}>Center content</ActionList.Item>
              </ActionList.Group>
              <ActionList.Divider />
              <ActionList.Item variant="danger" onSelect={() => alert('Delete file clicked')}>
                Delete file
                <ActionList.TrailingVisual>⌘D</ActionList.TrailingVisual>
              </ActionList.Item>
            </ActionList>
          </ActionMenu.Overlay>
        </ActionMenu>
      </PageHeader.Actions>
    </PageHeader.TitleArea>
  </PageHeader>
)

FilesPage.parameters = {
  viewport: {
    defaultViewport: 'small',
  },
}

export const Hyperlist = () => (
  <NavList>
    <NavList.Item href="/assigned" aria-current="page">
      <NavList.LeadingVisual>
        <PeopleIcon />
      </NavList.LeadingVisual>
      Assigned to me
    </NavList.Item>
    <Tooltip text="Created by me ⌥ ⇧ 2" direction="n">
      <NavList.Item href="/created">
        <NavList.LeadingVisual>
          <SmileyIcon />
        </NavList.LeadingVisual>
        Created by me
      </NavList.Item>
    </Tooltip>
    <NavList.Item href="/mentioned">
      <NavList.LeadingVisual>
        <CommentIcon />
      </NavList.LeadingVisual>
      Mentioned
    </NavList.Item>
    <NavList.Item href="/recent-activity">
      <NavList.LeadingVisual>
        <EyeIcon />
      </NavList.LeadingVisual>
      Recent activity
    </NavList.Item>
  </NavList>
)
