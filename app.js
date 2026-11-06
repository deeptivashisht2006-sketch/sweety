/**
 * BOUCLÉ Botanical Curl Trichology — Interactive Controller
 * Pure Vanilla JavaScript (ES6+), Zero Build Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Curl Pattern & Porosity Diagnostic Engine
  const curlTypeButtons = document.querySelectorAll('.curl-type-btn');
  const porosityButtons = document.querySelectorAll('.porosity-btn');
  const helixStrandPath = document.getElementById('helixStrandPath');
  const currentPatternBadge = document.getElementById('currentPatternBadge');
  const readoutMoisture = document.getElementById('readoutMoisture');
  const readoutPorosity = document.getElementById('readoutPorosity');
  const readoutShrinkage = document.getElementById('readoutShrinkage');
  const drawerProfileName = document.getElementById('drawerProfileName');

  // Mathematical SVG curve paths representing curl helical tension
  const helixPaths = {
    'type-2': 'M 30 110 Q 110 60 190 110 T 350 110', // Gentle loose wave
    'type-3': 'M 30 110 Q 70 30 110 110 T 190 110 T 270 110 T 350 110', // Defined spring ringlet
    'type-4': 'M 30 110 Q 50 10 70 110 T 110 110 T 150 110 T 190 110 T 230 110 T 270 110 T 310 110 T 350 110' // High-density tight micro-coil
  };

  const shrinkageFactors = {
    'type-2': '10% – 20% Minimal Springback',
    'type-3': '30% – 50% Natural Springback',
    'type-4': '60% – 75% High Spring Tension'
  };

  let activeType = 'type-3';
  let activeTypeName = 'Type 3: Defined Curls';
  let activePorosity = 'medium';
  let activePorosityName = 'Medium Porosity';

  curlTypeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      curlTypeButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      activeType = btn.dataset.type;
      activeTypeName = btn.dataset.name;
      const moisture = btn.dataset.moisture;

      // Morph SVG strand
      helixStrandPath.setAttribute('d', helixPaths[activeType]);
      currentPatternBadge.textContent = activeTypeName;
      readoutMoisture.textContent = moisture;
      readoutShrinkage.textContent = shrinkageFactors[activeType];
      updateDrawerProfile();
      showBoucleToast(`Diagnostic updated: ${activeTypeName}`);
    });
  });

  porosityButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      porosityButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      activePorosity = btn.dataset.porosity;
      activePorosityName = btn.textContent.split('(')[0].trim();
      const rule = btn.dataset.rule;

      readoutPorosity.textContent = rule;
      updateDrawerProfile();
      showBoucleToast(`Porosity calibrated to ${activePorosity.toUpperCase()}`);
    });
  });

  const updateDrawerProfile = () => {
    drawerProfileName.textContent = `${activeTypeName} • ${activePorosityName}`;
  };

  // 2. Real-time Atmospheric Humidity & Dew Point Forecaster
  const humiditySlider = document.getElementById('humiditySlider');
  const humidityDisplay = document.getElementById('humidityDisplay');
  const humidityStatusBadge = document.getElementById('humidityStatusBadge');
  const humidityTitle = document.getElementById('humidityTitle');
  const humidityAdvice = document.getElementById('humidityAdvice');
  const ingredientList = document.getElementById('ingredientList');

  const updateHumidityScience = (hum) => {
    const val = parseInt(hum, 10);
    humidityDisplay.textContent = `${val}%`;

    if (val < 35) {
      humidityDisplay.textContent = `${val}% (Arid / Low Dew Point)`;
      humidityStatusBadge.className = 'presc-status-badge badge-dry';
      humidityStatusBadge.textContent = 'Dry Air & Moisture Loss';
      humidityTitle.textContent = 'Rich Occlusive Lipid Seal Needed';
      humidityAdvice.textContent = 'In low atmospheric moisture, simple humectants can pull hydration OUT of the hair cortex into the dry air. Focus on emollient plant butters (Shea, Murumuru) and avoid excessive glycerin.';
      ingredientList.innerHTML = `
        <span class="ing-pill">Raw Shea Butter</span>
        <span class="ing-pill">Baobab Seed Oil</span>
        <span class="ing-pill">Hydrolyzed Rice Protein</span>
      `;
    } else if (val >= 35 && val <= 60) {
      humidityDisplay.textContent = `${val}% (Temperate / Balanced)`;
      humidityStatusBadge.className = 'presc-status-badge badge-optimal';
      humidityStatusBadge.textContent = 'Ideal Balance Window';
      humidityTitle.textContent = 'Lightweight Botanical Moisture';
      humidityAdvice.textContent = 'Environmental moisture matches your natural hair balance. Standard water-soluble botanical humectants (Aloe Vera & Agave Nectar) provide optimal curl bounce and elongation.';
      ingredientList.innerHTML = `
        <span class="ing-pill">Organic Aloe Vera Leaf</span>
        <span class="ing-pill">Agave Nectar Extract</span>
        <span class="ing-pill">Golden Jojoba Lipid</span>
      `;
    } else {
      humidityDisplay.textContent = `${val}% (High Humidity & Frizz Risk)`;
      humidityStatusBadge.className = 'presc-status-badge badge-warning';
      humidityStatusBadge.textContent = 'High Frizz Vulnerability';
      humidityTitle.textContent = 'Film-Forming Cast Required';
      humidityAdvice.textContent = 'High humidity causes hair to absorb ambient water vapor, lifting cuticle scales and producing halo frizz. Lock your clumps with film-forming botanicals like flaxseed gel to maintain definition.';
      ingredientList.innerHTML = `
        <span class="ing-pill">Organic Flaxseed Gel</span>
        <span class="ing-pill">Marshmallow Root Mucilage</span>
        <span class="ing-pill">Pracaxi Seed Anti-Frizz Oil</span>
      `;
    }
  };

  humiditySlider.addEventListener('input', (e) => {
    updateHumidityScience(e.target.value);
  });

  // 3. Wash-Day Ritual Checkboxes & Total Duration
  const stepCards = document.querySelectorAll('.ritual-step-card');
  const ritualTimeTotal = document.getElementById('ritualTimeTotal');
  const regimenCountBadge = document.getElementById('regimenCountBadge');
  const drawerItemsList = document.getElementById('drawerItemsList');
  const drawerTotalSteps = document.getElementById('drawerTotalSteps');
  const drawerTotalTime = document.getElementById('drawerTotalTime');

  const recalculateRitual = () => {
    let totalMinutes = 0;
    let selectedCount = 0;
    drawerItemsList.innerHTML = '';

    stepCards.forEach((card) => {
      const cb = card.querySelector('.step-checkbox');
      const time = parseInt(card.dataset.time, 10);
      const title = card.querySelector('.step-title').textContent;

      if (cb.checked) {
        card.classList.add('active');
        totalMinutes += time;
        selectedCount++;

        // Add to drawer list
        const item = document.createElement('div');
        item.className = 'd-item';
        item.innerHTML = `
          <span class="d-item-title">${title}</span>
          <span class="d-item-time">${time} min</span>
        `;
        drawerItemsList.appendChild(item);
      } else {
        card.classList.remove('active');
      }
    });

    ritualTimeTotal.textContent = `${totalMinutes} Minutes`;
    regimenCountBadge.textContent = `${selectedCount} Steps`;
    drawerTotalSteps.textContent = `${selectedCount} of ${stepCards.length} Steps`;
    drawerTotalTime.textContent = `${totalMinutes} Minutes`;
  };

  stepCards.forEach((card) => {
    const cb = card.querySelector('.step-checkbox');
    cb.addEventListener('change', () => {
      recalculateRitual();
      showBoucleToast('Ritual sequence updated');
    });
  });

  // 4. Regimen Drawer Controls
  const btnOpenRegimen = document.getElementById('btnOpenRegimen');
  const regimenDrawer = document.getElementById('regimenDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');
  const btnExportRitual = document.getElementById('btnExportRitual');

  const openDrawer = () => {
    regimenDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    regimenDrawer.setAttribute('aria-hidden', 'false');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    regimenDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    regimenDrawer.setAttribute('aria-hidden', 'true');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  btnOpenRegimen.addEventListener('click', openDrawer);
  btnCloseDrawer.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && regimenDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  btnExportRitual.addEventListener('click', () => {
    showBoucleToast('Custom Wash-Day PDF card generated!');
  });

  // 5. Virtual Consultation Form
  const consultationForm = document.getElementById('consultationForm');
  const btnSubmitConsult = document.getElementById('btnSubmitConsult');

  btnSubmitConsult.addEventListener('click', () => {
    const name = document.getElementById('consultName').value.trim();
    const email = document.getElementById('consultEmail').value.trim();
    const challenge = document.getElementById('consultChallenge').value.trim();

    if (!name || !email || !challenge) {
      showBoucleToast('Please complete all consultation parameters');
      return;
    }

    showBoucleToast(`Consultation request received for ${name}!`);
    consultationForm.reset();
  });

  // 6. Toast Notification Utility
  const boucleToast = document.getElementById('boucleToast');
  let toastTimer = null;

  function showBoucleToast(msg) {
    boucleToast.textContent = msg;
    boucleToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      boucleToast.classList.remove('show');
    }, 2800);
  }

  // Initialize
  recalculateRitual();
  updateHumidityScience(65);
});

