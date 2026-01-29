# Cahier des Charges & Analyse Technique : AC Echecs Calanques

## 1. Arborescence du Site

*   **Accueil** : Hero banner (vidéo/ambiance), Prochains événements, Actualités récentes, CTA "S'inscrire".
*   **Le Club** :
    *   Qui sommes-nous ? (Histoire, Esprit)
    *   L'Équipe (Animateurs, Bureau, Photos)
    *   Le Lieu (Carte, Accès, Horaires)
    *   Documents officiels (Règlement, Statuts - PDF)
*   **Activités & Cours** :
    *   Cours Jeunes (Débutants à Compétiteurs)
    *   Cours Adultes
    *   Stages (Vacances scolaires)
    *   Jeu Libre & Tournois Internes
*   **Agenda** : Calendrier dynamique (Cours, Tournois, Événements).
*   **Résultats** : Intégration FFE ou tableaux manuels, Liens Chess-results.
*   **Espace Membre** (Sécurisé) :
    *   Tableau de bord personnel.
    *   Documents réservés (Cours PDF/PGN).
    *   Renouvellement adhésion.
*   **Partenaires** : Page dédiée avec logos et liens.
*   **Contact** : Formulaire, Coordonnées, Réseaux sociaux.
*   **Blog / Actualités** : Articles sur la vie du club.

## 2. Choix Technologique & Justification

**Recommandation : Next.js (React) + CMS "Headless" (ex: Strapi ou Directus) ou WordPress Headless.**

*   **Pourquoi pas WordPress classique ?** : Bien que demandé, un WP classique devient souvent une "usine à gaz" lente et difficile à sécuriser quand on multiplie les plugins (HelloAsso + Calendar + Members + SEO + Cache...).
*   **Justification Next.js** :
    *   **Performance (SEO & Vitesse)** : Chargement instantané, crucial pour le UX.
    *   **UX Design** : Liberté totale pour créer des animations fluides (déplacement de pièces d'échecs, transitions) impossibles sur WP standard.
    *   **Évolutivité** : Plus facile d'ajouter un "vrai" PGN Viewer interactif ou un forum sur mesure plus tard.
    *   **Sécurité** : Le front-end est découplé des données.

**Stack proposée :**
*   **Frontend** : Next.js 14 (App Router) + TailwindCSS (Styling rapide).
*   **Backend/CMS** : **Strapi** (User-friendly pour le bureau du club, auto-hébergé ou cloud) OU **Supabase** (Pour la base de données et l'Auth) + MDX pour le contenu simple.
*   **Hébergement** : Vercel (Front) + Railway (Back/DB) - *Comme pour ProfVirtuel*.

## 3. Modules & Fonctionnalités (Priorités)

### Priorité 1 (Essentiel - MVP)
*   **Présentation & Contenu** : Pages Statiques (Next.js).
*   **Agenda** : Composant `FullCalendar` ou `React-Big-Calendar` connecté à Google Calendar API.
*   **Inscription & Paiement** : Intégration **HelloAsso Widget** (simple et robuste pour les assos) via Iframe ou API.
*   **Actualités** : Blog simple.
*   **Formulaire Contact** : Envoi mail (Resend ou Nodemailer).

### Priorité 2 (Lancement officiel)
*   **Integration FFE** : Scraping ou lien vers le site FFE pour les Elo.
*   **PGN Viewer** : Intégration de `react-chessboard` + `chess.js` pour visualiser les belles parties du club dans les articles.
*   **Espace Membre** : Login (Auth.js), accès aux cours privés.

### Priorité 3 (Évolutions)
*   **Boutique** : Merchandising club.
*   **Forum** : Espace discussion interne.

## 4. Structure Base de Données (Suggestion simplifiée)

*   **Users** : `id`, `email`, `role` (admin, member, visitor), `elo_ffe`, `subscription_status`.
*   **Events** : `id`, `title`, `start_date`, `end_date`, `type` (tournoi, cours, stage), `location`, `helloasso_link`.
*   **Posts** : `id`, `title`, `content` (Rich Text), `category`, `author_id`, `published_at`.
*   **Resources** : `id`, `title`, `file_url` (PDF/PGN), `access_level` (public/member), `associated_course_id`.

## 5. Intégrations Externes

*   **HelloAsso** : Utilisation du Widget Iframe pour les adhésions/stages (Solution la plus sécurisée et simple à maintenir).
*   **Google Workspace** :
    *   *Agenda* : Synchronisation du calendrier du site avec un Google Calendar public du club "AC Echecs".
    *   *Drive* : Stockage des PDF/Photos.
*   **Brevo (ex-Sendinblue)** : Newsletter. Formulaire d'inscription en pied de page connecté à l'API Brevo.
*   **PGN Viewer** : Librairie JS `Lichess PGN Viewer` ou composants React natifs.
*   **Réseaux Sociaux** : Flux Auto (Instagram/FB) sur la page d'accueil.

## 6. UX/UI & Design System

*   **Style** : "Glassmorphism" léger (transparence) pour rappeler la pureté des Calanques.
*   **Palette** :
    *   🔵 **Bleu Profond** (Mer) : `#0F4C81` (Texte, Header).
    *   🟠 **Orange** (Terre/Soleil) : `#FF6F61` (Boutons CTA, Accents).
    *   🟣 **Lavande** (Provence) : `#E6E6FA` (Fonds de section, Badges).
    *   ⚪ **Blanc/Gris** : `#F8FAFC` (Fond principal).
*   **Typographie** :
    *   Titres : *Montserrat* ou *Raleway* (Moderne, géométrique).
    *   Texte : *Inter* ou *Open Sans* (Lisibilité écran).
*   **Accessibilité** : Contraste AA minimum. Navigation clavier.

## 7. Roadmap de Production

*   **Phase 1 : Conception (Février 2026)**
    *   Setup technique (Repo, Next.js, CMS).
    *   Propositions graphiques (Maquettes Figma rapides générées par IA).
    *   *Livrable 01/03 : Maquettes + Architecture validée.*

*   **Phase 2 : Développement Core (Mars 2026)**
    *   Développement Front (Pages Accueil, Club, Activités).
    *   Intégration Calendrier & HelloAsso.
    *   *Livrable 01/04 : Version Alpha (Structure vide).*

*   **Phase 3 : Contenu & Features Avancées (Avril-Mai 2026)**
    *   Espace Membre.
    *   Intégration PGN Viewer.
    *   Remplissage contenus (textes, photos).
    *   *Livrable 01/06 : Version Bêta Test.*

*   **Phase 4 : Recette & Mise en Ligne (Juin 2026)**
    *   Tests utilisateurs (Mobiles, Tablettes).
    *   Optimisation SEO / Performance.
    *   Lancement officiel 01/07.

