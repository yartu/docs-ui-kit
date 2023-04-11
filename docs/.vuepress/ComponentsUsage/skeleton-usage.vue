<template>
  <h1 class="text-4xl font-semibold">Skeletons</h1>

  <h1 class="text-2xl font-semibold py-1">Yartu Card</h1>

  <y-skeleton type="yartu-card-skeleton"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Repo Folder</h1>
  <y-skeleton :skeletonCount="3" type="repo-folder"></y-skeleton>
  <repo-folder-skeleton :skeletonCount="3"></repo-folder-skeleton>

  <h1 class="text-2xl font-semibold py-1">Drive Client</h1>
  <y-skeleton :skeletonCount="3" type="drive-client-skeleton"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Table İtem</h1>
  <y-skeleton :skeletonCount="3" type="table-item"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Email List</h1>
  <y-skeleton :skeletonCount="3" type="email-list"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Email Content</h1>
  <y-skeleton type="email-content"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Profile Content</h1>
  <y-skeleton type="profile-content"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Email Widget</h1>
  <y-skeleton :skeletonCount="3" type="email-widget"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Note Widget</h1>
  <y-skeleton :skeletonCount="3" type="note-widget"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Sticky Note</h1>
  <y-skeleton type="sticky-note"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Conference Card</h1>
  <y-skeleton :skeletonCount="3" type="conference-card"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Project Task Card</h1>
  <y-skeleton :skeletonCount="3" type="project-task-card"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Project Card</h1>
  <y-skeleton :skeletonCount="3" type="project-card"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Project Board Card</h1>
  <y-skeleton :skeletonCount="3" type="project-board-card"></y-skeleton>

  <h1 class="text-2xl font-semibold py-1">Project Task Detail</h1>
  <y-skeleton type="project-task-detail"></y-skeleton>

  <copy-to-clip-board>
    &lt;y-small-card&gt;
    {{ "\n  " }}&lt;template #img&gt;{{ "\n   " }}&lt;img src="..."&gt;{{
      "\n  "
    }}&lt;/template&gt; {{ "\n  " }}&lt;template
    #content&gt;YARTU&lt;/template&gt; {{ "\n  " }}&lt;template #btn&gt;{{
      "\n   "
    }}&lt;y-button primary&gt;View&lt;/y-button&gt;{{ "\n  " }}&lt;/template&gt;
    {{ "\n " }}&lt;/y-small-card&gt;
  </copy-to-clip-board>
</template>

<script setup>
import { ref } from "vue";
</script>
