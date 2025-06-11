// Mock Tests Initialization
(function() {
    function initializeMockTests() {
        console.log('Initializing mock tests...');
        
        // Check if data is available
        if (typeof window.mockTestsData === 'undefined') {
            console.error('mockTestsData is not available');
            const grid = document.querySelector('.grid');
            if (grid) {
                grid.innerHTML = '<div class="error-message" style="text-align: center; padding: 20px; color: red;">Failed to load test data. Please refresh the page or contact support if the issue persists.</div>';
            }
            return;
        }
        
        // Initialize the test cards
        const testCardsContainer = document.querySelector('.grid');
        if (!testCardsContainer) {
            console.error('Test cards container not found!');
            return;
        }
        
        console.log('Rendering test cards...');
        renderTestCards('written');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMockTests);
    } else {
        initializeMockTests();
    }
})(); 