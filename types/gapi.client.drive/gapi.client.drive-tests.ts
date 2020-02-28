/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('drive', 'v3', () => {
        /** now we can use gapi.client.drive */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage the files in your Google Drive */
            'https://www.googleapis.com/auth/drive',
            /** View and manage its own configuration data in your Google Drive */
            'https://www.googleapis.com/auth/drive.appdata',
            /** View and manage Google Drive files and folders that you have opened or created with this app */
            'https://www.googleapis.com/auth/drive.file',
            /** View and manage metadata of files in your Google Drive */
            'https://www.googleapis.com/auth/drive.metadata',
            /** View metadata for files in your Google Drive */
            'https://www.googleapis.com/auth/drive.metadata.readonly',
            /** View the photos, videos and albums in your Google Photos */
            'https://www.googleapis.com/auth/drive.photos.readonly',
            /** View the files in your Google Drive */
            'https://www.googleapis.com/auth/drive.readonly',
            /** Modify your Google Apps Script scripts' behavior */
            'https://www.googleapis.com/auth/drive.scripts',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Gets information about the user, the user's Drive, and system capabilities. */
        await gapi.client.drive.about.get({
        });
        /** Gets the starting pageToken for listing future changes. */
        await gapi.client.drive.changes.getStartPageToken({
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Lists the changes for a user or Team Drive. */
        await gapi.client.drive.changes.list({
            includeCorpusRemovals: true,
            includeRemoved: true,
            includeTeamDriveItems: true,
            pageSize: 4,
            pageToken: "pageToken",
            restrictToMyDrive: true,
            spaces: "spaces",
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Subscribes to changes for a user. */
        await gapi.client.drive.changes.watch({
            includeCorpusRemovals: true,
            includeRemoved: true,
            includeTeamDriveItems: true,
            pageSize: 4,
            pageToken: "pageToken",
            restrictToMyDrive: true,
            spaces: "spaces",
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Stop watching resources through this channel */
        await gapi.client.drive.channels.stop({
        });
        /** Creates a new comment on a file. */
        await gapi.client.drive.comments.create({
            fileId: "fileId",
        });
        /** Deletes a comment. */
        await gapi.client.drive.comments.delete({
            commentId: "commentId",
            fileId: "fileId",
        });
        /** Gets a comment by ID. */
        await gapi.client.drive.comments.get({
            commentId: "commentId",
            fileId: "fileId",
            includeDeleted: true,
        });
        /** Lists a file's comments. */
        await gapi.client.drive.comments.list({
            fileId: "fileId",
            includeDeleted: true,
            pageSize: 3,
            pageToken: "pageToken",
            startModifiedTime: "startModifiedTime",
        });
        /** Updates a comment with patch semantics. */
        await gapi.client.drive.comments.update({
            commentId: "commentId",
            fileId: "fileId",
        });
        /** Creates a copy of a file and applies any requested updates with patch semantics. */
        await gapi.client.drive.files.copy({
            fileId: "fileId",
            ignoreDefaultVisibility: true,
            keepRevisionForever: true,
            ocrLanguage: "ocrLanguage",
            supportsTeamDrives: true,
        });
        /** Creates a new file. */
        await gapi.client.drive.files.create({
            ignoreDefaultVisibility: true,
            keepRevisionForever: true,
            ocrLanguage: "ocrLanguage",
            supportsTeamDrives: true,
            useContentAsIndexableText: true,
        });
        /**
         * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a Team Drive the user must be an organizer on the
         * parent. If the target is a folder, all descendants owned by the user are also deleted.
         */
        await gapi.client.drive.files.delete({
            fileId: "fileId",
            supportsTeamDrives: true,
        });
        /** Permanently deletes all of the user's trashed files. */
        await gapi.client.drive.files.emptyTrash({
        });
        /** Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB. */
        await gapi.client.drive.files.export({
            fileId: "fileId",
            mimeType: "mimeType",
        });
        /** Generates a set of file IDs which can be provided in create requests. */
        await gapi.client.drive.files.generateIds({
            count: 1,
            space: "space",
        });
        /** Gets a file's metadata or content by ID. */
        await gapi.client.drive.files.get({
            acknowledgeAbuse: true,
            fileId: "fileId",
            supportsTeamDrives: true,
        });
        /** Lists or searches files. */
        await gapi.client.drive.files.list({
            corpora: "corpora",
            corpus: "corpus",
            includeTeamDriveItems: true,
            orderBy: "orderBy",
            pageSize: 5,
            pageToken: "pageToken",
            q: "q",
            spaces: "spaces",
            supportsTeamDrives: true,
            teamDriveId: "teamDriveId",
        });
        /** Updates a file's metadata and/or content with patch semantics. */
        await gapi.client.drive.files.update({
            addParents: "addParents",
            fileId: "fileId",
            keepRevisionForever: true,
            ocrLanguage: "ocrLanguage",
            removeParents: "removeParents",
            supportsTeamDrives: true,
            useContentAsIndexableText: true,
        });
        /** Subscribes to changes to a file */
        await gapi.client.drive.files.watch({
            acknowledgeAbuse: true,
            fileId: "fileId",
            supportsTeamDrives: true,
        });
        /** Creates a permission for a file or Team Drive. */
        await gapi.client.drive.permissions.create({
            emailMessage: "emailMessage",
            fileId: "fileId",
            resource?:any,
            sendNotificationEmail: true,
            supportsTeamDrives: true,
            transferOwnership: true,
            useDomainAdminAccess: true,
        });
        /** Deletes a permission. */
        await gapi.client.drive.permissions.delete({
            fileId: "fileId",
            permissionId: "permissionId",
            supportsTeamDrives: true,
            useDomainAdminAccess: true,
        });
        /** Gets a permission by ID. */
        await gapi.client.drive.permissions.get({
            fileId: "fileId",
            permissionId: "permissionId",
            supportsTeamDrives: true,
            useDomainAdminAccess: true,
        });
        /** Lists a file's or Team Drive's permissions. */
        await gapi.client.drive.permissions.list({
            fileId: "fileId",
            pageSize: 2,
            pageToken: "pageToken",
            supportsTeamDrives: true,
            useDomainAdminAccess: true,
        });
        /** Updates a permission with patch semantics. */
        await gapi.client.drive.permissions.update({
            fileId: "fileId",
            permissionId: "permissionId",
            removeExpiration: true,
            supportsTeamDrives: true,
            transferOwnership: true,
            useDomainAdminAccess: true,
        });
        /** Creates a new reply to a comment. */
        await gapi.client.drive.replies.create({
            commentId: "commentId",
            fileId: "fileId",
        });
        /** Deletes a reply. */
        await gapi.client.drive.replies.delete({
            commentId: "commentId",
            fileId: "fileId",
            replyId: "replyId",
        });
        /** Gets a reply by ID. */
        await gapi.client.drive.replies.get({
            commentId: "commentId",
            fileId: "fileId",
            includeDeleted: true,
            replyId: "replyId",
        });
        /** Lists a comment's replies. */
        await gapi.client.drive.replies.list({
            commentId: "commentId",
            fileId: "fileId",
            includeDeleted: true,
            pageSize: 4,
            pageToken: "pageToken",
        });
        /** Updates a reply with patch semantics. */
        await gapi.client.drive.replies.update({
            commentId: "commentId",
            fileId: "fileId",
            replyId: "replyId",
        });
        /** Permanently deletes a revision. This method is only applicable to files with binary content in Drive. */
        await gapi.client.drive.revisions.delete({
            fileId: "fileId",
            revisionId: "revisionId",
        });
        /** Gets a revision's metadata or content by ID. */
        await gapi.client.drive.revisions.get({
            acknowledgeAbuse: true,
            fileId: "fileId",
            revisionId: "revisionId",
        });
        /** Lists a file's revisions. */
        await gapi.client.drive.revisions.list({
            fileId: "fileId",
            pageSize: 2,
            pageToken: "pageToken",
        });
        /** Updates a revision with patch semantics. */
        await gapi.client.drive.revisions.update({
            fileId: "fileId",
            revisionId: "revisionId",
        });
        /** Creates a new Team Drive. */
        await gapi.client.drive.teamdrives.create({
            requestId: "requestId",
        });
        /** Permanently deletes a Team Drive for which the user is an organizer. The Team Drive cannot contain any untrashed items. */
        await gapi.client.drive.teamdrives.delete({
            teamDriveId: "teamDriveId",
        });
        /** Gets a Team Drive's metadata by ID. */
        await gapi.client.drive.teamdrives.get({
            teamDriveId: "teamDriveId",
            useDomainAdminAccess: true,
        });
        /** Lists the user's Team Drives. */
        await gapi.client.drive.teamdrives.list({
            pageSize: 1,
            pageToken: "pageToken",
            q: "q",
            useDomainAdminAccess: true,
        });
        /** Updates a Team Drive's metadata */
        await gapi.client.drive.teamdrives.update({
            teamDriveId: "teamDriveId",
        });
    }
});
