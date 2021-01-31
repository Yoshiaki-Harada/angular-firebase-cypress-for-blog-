const resoucePath = 'cypress/resources';

export const clearMessagesData = () => {
    console.log('Clear messages data...')
    cy.callFirestore('delete', 'messages', { recursive: true });
}


export const insertMessagesData = () => {
    console.log('Insert messages data...')
    cy.task('getFileNames', `${resoucePath}`)
        .then(fileNames => {
            (fileNames as string[]).forEach((f) => {
                console.log(f)
                cy.readFile<{ content: string }>(`${resoucePath}/${f}`)
                    .then(message => {
                        cy.callFirestore('set', `messages/${f.replace('.json', '')}`, message);
                    });
            });
        })
}