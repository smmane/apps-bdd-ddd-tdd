Feature: Programmation de publication
  En tant qu'utilisateur
  Je veux pouvoir programmer un post
  Afin qu'il soit publié automatiquement à la date choisie

  Scenario: Programmer un post
    Given je suis un utilisateur connecté
    When je programme un post pour le 15 mai à 14h30
    Then le post est sauvegardé avec l’état "non publié"
    And la date de publication est bien enregistrée
